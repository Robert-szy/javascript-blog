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
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){
    console.log('event:');
    
    /* remove links from left panel*/
    const titleList = document.querySelector(optTitleListSelector)
    titleList.innerHTML = '';
    
    /* for each article: */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log ('articles', articles);

    for(let article of articles){
        
        /* find article id */
        const articleId = article.getAttribute('id');
        console.log ('article', article);
        console.log ('id', articleId);
        
        /* find article title */
        
        
        /* generate HTML with title and id */
        
        
        /* insert HTML into link list */
    
    }
  }
  
  generateTitleLinks ();

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  /*const tags = document.querySelectorAll('.tags a');
  for(let tag of tags){
    console.log('tags:', tags);
    console.log('tag:', tag);
    tag.addEventListener('click', generateTitleLinks);
  }*/

}