import newsList from '../src/data/db';
export default class NewsList extends HTMLElement{
    static observedAttributes = ['newslist'];
    constructor(){
        super();
        this.renderItem = '';//用于接收你传递给插槽的标签。
        this.items = null;//用于接收数据项
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode:"open"});
        const templateDOM = document.getElementById('newsList');
        const cloneTemp = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            .itemContent{
                padding:5px;   
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(cloneTemp);
        //获取template标签中的slot标签
        const slot = shadow.querySelector('slot');
        this.renderItemClass = slot.className;//之所以要保存这个className是因为后面我们可能会用到它处理样式。
        slot.addEventListener('slotchange',(event)=>{
            const children = event.target.assignedElements();//获取分配到slot标签上的内容。
            children.forEach(ele => {
                if(ele.slot === 'renderItem'){//如果传递过来的标签的slot属性值为renderItem，我们才开始真正的渲染。
                    this.renderItem = ele.localName;//这个就是标签名，后面我就根据这个标签名创建标签。
                    this.render();
                }
            });
        })
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name === 'newslist'){
            if(newValue){
                this.items = JSON.parse(newValue);
            }
        }
    }

    render(){
        if(this.items && this.renderItem){
            const listContainer = this.shadowRoot.querySelector('.list-container');
            listContainer.innerHTML = '';//要把原本的内容清空。
            this.items.forEach(item=>{
                const newItemEle = document.createElement(this.renderItem);//通过保存的标签名，创建对应的标签。
                newItemEle.setAttribute('news',JSON.stringify(item));//将数据传到newsItem中去
                newItemEle.className = this.renderItemClass;
                listContainer.appendChild(newItemEle);
            })
        }
    }

}

customElements.define('news-list',NewsList);
const newItem = document.getElementById('newslist');
newItem.setAttribute('newslist', JSON.stringify(newsList));