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
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list';

/* [DONE] set initial .post height*/
const sidebarStartHeight = document.querySelector('.sidebar').offsetHeight;
const childStartHeight = document.querySelector('.post').offsetHeight;
if (childStartHeight>sidebarStartHeight) {
    let childHeight = childStartHeight + 40 + 'px';
    document.querySelector('.posts').style.height = childHeight;
}

const generateTitleLinks = function(customSelector = ''){
    /* [DONE] remove links from left panel*/
    const titleList = document.querySelector(optTitleListSelector)
    titleList.innerHTML = '';

    /* [DONE] for each article: */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log ('articles: ', articles);
    console.log ('customSelector: ', customSelector);
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

const generateTags = function(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log ('articles: ', articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tags = article.querySelector(optArticleTagsSelector);
    console.log ('article: ', article);
    console.log ('tags: ', tags);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log ('articleTags: ', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log ('articleTagsArray: ', articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log ('tag: ', tag);

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-'+ tag +'"><span>'+ tag +'</span></a></li>'+ " ";
      console.log ('linkHTML: ', linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log('html', html);

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tags.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateTags();

const tagClickHandler = function(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
  console.log('href:' + href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag:' + tag);


  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('href .active');
  console.log('activeTagLinks:' + activeTagLinks);

  /* START LOOP: for each active tag link */
  /*for(let activeTagLink of activeTagLinks){

      /* remove class active */
      /*activeTagLink.classList.remove('active');
      console.log('activeTagLink:' + activeTagLink);*/

    /* END LOOP: for each active tag link */
    //}

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

const addClickListenersToTags = function(){
  /* find all links to tags */
  const links = document.querySelectorAll('a[href^="#tag-"]');
    console.log ('links', links);

    /* START LOOP: for each link */
    for(let link of links){
      console.log ('link', link);

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
}

addClickListenersToTags();

}
