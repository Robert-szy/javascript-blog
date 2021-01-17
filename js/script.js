{
const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log('event:', event);
  
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    
    /* [DONE] add class 'active' to the clicked link */
    event.preventDefault();
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);
    console.log('clickedElement (with plus):' + clickedElement);
    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector:', articleSelector);
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);
  
    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');

    /* [DONE] find article and sidebars height*/
    let childHeight = targetArticle.offsetHeight + 40;
    let sidebarHeight = sidebarStartHeight;
    console.log('targetArticle:', targetArticle);
    console.log('childHeight:', childHeight);
    console.log('sidebarHeight:', sidebarHeight);
    console.log('sidebarStartHeight:', sidebarStartHeight);


    /* [DONE] set wrapper height for selected article*/
    const wrapperHeight = document.querySelector('.posts');
    console.log('wrapperHeight:', wrapperHeight);
    if (childHeight>sidebarStartHeight) {
        childHeight = childHeight + 'px';
        wrapperHeight.style.height = childHeight;
    } else {
        sidebarHeight = sidebarHeight +'px';
        wrapperHeight.style.height = sidebarHeight;
    }
}

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

/* [DONE] set initial .post height*/
const sidebarStartHeight = document.querySelector('.sidebar').offsetHeight;
const childStartHeight = document.querySelector('.post').offsetHeight;
if (childStartHeight>sidebarStartHeight) {
    let childHeight = childStartHeight + 40 + 'px';
    document.querySelector('.posts').style.height = childHeight;
}

function generateTitleLinks(){
    /* [DONE] remove links from left panel*/
    const titleList = document.querySelector(optTitleListSelector)
    titleList.innerHTML = '';
    
    /* [DONE] for each article: */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log ('articles: ', articles);
    let html = '';   
    for(let article of articles){
    
        /* [DONE] find article id */
        const articleId = article.getAttribute('id');
        console.log ('article: ', article);
        console.log ('id: ', articleId);
                        
        /* [DONE] find article title */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log ('articleTitle: ', articleTitle);

        const articleTitle1 = document.querySelector(optTitleSelector).innerHTML;
        console.log ('articleTitle1: ', articleTitle1);
        
        /* [DONE] generate HTML with title and id */
        const linkHTML = '<li><a href="#'+ articleId +'"><span>'+ articleTitle +'</span></a></li>';
        console.log ('linkHTML: ', linkHTML);

        /* [DONE] insert HTML into link list */
        //titleList.innerHTML = titleList.innerHTML + linkHTML;
        //titleList.insertAdjacentHTML ("beforeend", linkHTML);
        
        html = html + linkHTML;
        console.log('html', html)
    }
    titleList.innerHTML = html

    const links = document.querySelectorAll('.titles a');
    console.log ('links', links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
}
  
generateTitleLinks ();




/*const tags = document.querySelectorAll('.tags a');
for(let tag of tags){
    console.log('tags:', tags);
    console.log('tag:', tag);
    tag.addEventListener('click', generateTitleLinks);
}*/

}