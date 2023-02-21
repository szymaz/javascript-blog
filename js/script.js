{'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
  
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
}
  
    /*[DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    //console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
}
  
    /* [DONE ]get 'href' attribute from the clicked link */
    const hrefAtribute= clickedElement.getAttribute('href');
    console.log('getAttribute:',hrefAtribute);
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const correctArticle= document.getElementById(hrefAtribute);
    console .log('correctArticle id:',correctArticle)
  
    /* add class 'active' to the correct article */
    correctArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  /* Generate a list of article titles*/
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList=document.querySelector(optTitleListSelector).innerHTML = '';
  console .log ('title list:',titleList);


  /* for each article */
  
  let html = '';
  const articles= document.querySelector(optArticleSelector);
  for (let article of articles){


    
    /* get the article id */
    const articleId=article.getAttribute('href');
    console.log('getAttribute:',articleId);
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('link html:',linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
}

generateTitleLinks();
}