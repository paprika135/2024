import newsList from '../src/data/db';
export default class NewsItems extends HTMLElement{
    //监听customElements的属性；
    static observedAttributes = ["news"];
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});//这个attachShadow()方法返回的就是shadowRoot
        const templateDom = document.getElementById('newItems');
        const cloneTemp = templateDom.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
                :host{
                    display:flex;
                    flex-direction:column;
                    width:360px;
                    height:196px;
                    margin: 0 auto;
                    background:#dfe6e9;
                    border-top:1px solid #2d3436;
                }
                .t-box{
                    height:42px;
                    display:flex;
                    flex-direction:row;
                    padding-top:15px;
                    padding-left:4px;
                    align-item:center;
                }
                .b-box{
                    flex:1;
                    overflow: hidden;
                    padding:8px;
                }
                div.title-box{
                    padding-left:5px;
                }
                img.img-responsive{
                    width:32px;
                    height:32px;
                    margin-top:3px;
                }
                span.title-content{
                    font-size:14px;
                    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
                    vertical-align:baseline;
                }
                span.author{
                    font-size:11px;
                    padding-right:22px;
                    color:#636363;
                    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
                    vertical-align:baseline;
                }
                span.time{
                    font-size:11px;
                    color:#636363;
                    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
                    vertical-align:baseline;
                }
                p.content{
                    font-size:16px;
                    color:#333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical; 
                    -webkit-line-clamp: 4;
                }
                div.b-box-botton{
                    display:flex;
                    justify-content:space-around;
                }
                div.b-box-botton a{
                    font-size:13px;
                    text-decoration: none;
                    color:cornflowerblue;
                }
                `
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(cloneTemp);
    }
    
    //但是你注意这个attributeChangedCallback会在元素正式被放到真实的dom之前完成，所以我们不能把构建的操作放到connectedCallback中
    attributeChangedCallback(name, oldValue, newValue){
        if(name === 'news'){
            if(newValue){
                const news = JSON.parse(newValue);
                this.render(news);
            }
        }
    }

    render(news){   
        if(this.shadowRoot && news){
            this.shadowRoot.querySelector(".img-responsive").src = news.avator;
            this.shadowRoot.querySelector(".title-content").innerHTML = news.title;
            this.shadowRoot.querySelector(".author").innerHTML = news.auhtor;
            this.shadowRoot.querySelector(".time").innerHTML = news.publishDate;
            this.shadowRoot.querySelector(".content").innerHTML = news.content;
        }
    }
}
window.customElements.define('news-items',NewsItems);
// const newItems = document.querySelector('.newsItems');
// newItems.setAttribute('news',JSON.stringify(newsList[0]));