angular.module('newsApp', ['ngRoute'])
  .controller('newsController', newsCtl);


  newsCtl.$inject=['$http']

  function newsCtl($http) {

    var nCtl = this;

    nCtl.title = 'Logos';



    function getHomeNews() {
      console.log('making http request')
      $http.get('https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
        .then(function(res, err){
          console.log(res.data)
          nCtl.articles = res.data.articles
        })
      }
        function getHomeNews2() {
          console.log('making http request')
          $http.get('https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
            .then(function(res, err){
              console.log(res.data)
              nCtl.articlesHome2 = res.data.articles
            })
      }

      function getTechNews() {
        console.log('making http request')
        $http.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
          .then(function(res, err){
            console.log(res.data)
            nCtl.articlesTech = res.data.articles
          })
        }
          function getTechNews2() {
            console.log('making http request')
            $http.get('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
              .then(function(res, err){
                console.log(res.data)
                nCtl.articlesTech2 = res.data.articles
              })
        }

        function getTechNews3() {
          console.log('making http request')
          $http.get('https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
            .then(function(res, err){
              console.log(res.data)
              nCtl.articlesTech3 = res.data.articles
            })
      }

      function getSportsNews() {
        console.log('making http request')
        $http.get(' https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
          .then(function(res, err){
            console.log(res.data)
            nCtl.articlesESPN = res.data.articles
          })

        }

        function getSportsNews2() {
          console.log('making http request')
          $http.get(' https://newsapi.org/v1/articles?source=espn&apiKey=496e11d7f1f6465faa5231f7fbc445ea')
            .then(function(res, err){
              console.log(res.data)
              nCtl.articlesBBCSport = res.data.articles
            })

          }


    getHomeNews();
    getHomeNews2();
    getTechNews();
    getTechNews2();
    getTechNews3();
    getSportsNews();
    getSportsNews2();
}
