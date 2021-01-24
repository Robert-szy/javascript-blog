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

    setArticleHeight(targetArticle);

    /* [DONE] find article and sidebars height*/
    /*let childHeight = targetArticle.offsetHeight + 40;
    let sidebarHeight = sidebarStartHeight;
    console.log('targetArticle:', targetArticle);
    console.log('childHeight:', childHeight);
    console.log('sidebarHeight:', sidebarHeight);
    console.log('sidebarStartHeight:', sidebarStartHeight);


    /* [DONE] set wrapper height for selected article*/
    /*const wrapperHeight = document.querySelector('.posts');
    console.log('wrapperHeight:', wrapperHeight);
    if (childHeight>sidebarStartHeight) {
        childHeight = childHeight + 'px';
        wrapperHeight.style.height = childHeight;
    } else {
        sidebarHeight = sidebarHeight +'px';
        wrapperHeight.style.height = sidebarHeight;
    }*/
}

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list',
optArticleAuthorsSelector = '.post-author',
optCloudClassCount = 5,
optCloudClassPrefix = 'tag-size-';
//optTagListSelector = '.tags .list';

/* [DONE] set initial .post height*/
const sidebarStartHeight = document.querySelector('.sidebar').offsetHeight;
const childStartHeight = document.querySelector('.post').offsetHeight;

const setInitialHeight = function() {
  if (childStartHeight>=sidebarStartHeight) {
      let childHeight = childStartHeight + 40 + 'px';
      document.querySelector('.posts').style.height = childHeight;
  }
}

setInitialHeight();

const setArticleHeight = function(article){
  const targetArticle = article;
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

        html = html + linkHTML;
        console.log('html', html);
        setArticleHeight(article);
    }
    titleList.innerHTML = html



    const links = document.querySelectorAll('.titles a');
    console.log ('links', links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

}

generateTitleLinks ();

const calculateTagsParams = function (tags){
  let tagsParams = {'max': 0, 'min': 999999};

  for(let tag in tags){
    console.log(tag + ' is used ' + tags[tag] + ' times');
    if (tags[tag]>tagsParams.max) {
      tagsParams.max=tags[tag];
    } else if (tags[tag]<tagsParams.min){
      tagsParams.min=tags[tag];
    }
    console.log('max: ', tagsParams.max);
    console.log('min: ', tagsParams.min);
  }
  console.log ('tagsParams: ', tagsParams);

  return tagsParams;
}

const calculateTagClass = function(count, params){
  console.log('count: ', count);
  console.log('params: ', params);

  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
  const classname = optCloudClassPrefix + classNumber;
  console.log('class: ', classname);

  return classname;

}

const generateTags = function(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

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
      console.log('linkHTML: ', linkHTML);

      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
        } else {
        allTags[tag]++;
      }

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tags.innerHTML = html;


  /* END LOOP: for every article: */
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  console.log('tagList', tagList);

  /* [NEW] add html from allTags to tagList */
  //tagList.innerHTML = allTags.join(' ');
  console.log('allTags: ', allTags);

  /*[NEW] */
  const tagsParam = calculateTagsParams (allTags);
  console.log ('tagsParams: ', tagsParam);

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-' + tag + '" class="' +calculateTagClass(allTags[tag], tagsParam)+'"><span>' + tag + '(' + allTags[tag] + ')</span></a></li>' ;
  }
  /* [NEW] END LOOP: for each tag in allTags: */

  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
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

//

const generateAuthors = function(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log ('articles: ', articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find authors wrapper */
    const authors = article.querySelector(optArticleAuthorsSelector);
    console.log ('article: ', article);
    console.log ('authors: ', authors);

    /* get authors from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log ('articleTAuthor: ', articleAuthor);

    /* generate HTML of the link */
    const linkHTML = '<a href="'+ articleAuthor +'"><span>'+ 'by ' + articleAuthor +'</span></a>';
    console.log ('linkHTML: ', linkHTML);

    /* insert HTML of all the links into the tags wrapper */
    authors.innerHTML = linkHTML;

  /* END LOOP: for every article: */
  }
}

generateAuthors();

const authorClickHandler = function(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
  console.log('href:' + href);

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + href + '"]');
}

const addClickListenersToAuthors = function(){
  /* find all links to authors */
  const links = document.querySelectorAll('.post-author a');
    console.log ('links: ', links);

    /* START LOOP: for each link */
    for(let link of links){
      console.log ('link: ', link);

      /* add authorClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */
    }
}

addClickListenersToAuthors();



}
