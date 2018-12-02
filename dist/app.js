angular.module('app', [])
  .controller('myCtrl', function($scope, $http, $interval, $timeout) {
    angular.extend(this, {
      hourContainerAnimate: hourContainerAnimate,
      minuteContainerAnimate: minuteContainerAnimate,
      secondContainerAnimate: secondContainerAnimate
    })
    $scope.initialize = function() {}
    angular.element(document).ready(function () {
      $timeout(function() {}, 500);
      var containers = document.querySelectorAll('.container')
      for (var i = 0; i < containers.length; i++) {
        var rotateStr = containers[i].style.webkitTransform
        var rotateNum = parseInt(rotateStr.slice(8, rotateStr.length - 4))
        containers[i].angle = rotateNum
        if(containers[i].className.includes('hours')){
          hourContainerAnimate(containers[i])
        } else if (containers[i].className.includes('minutes')) {
          minuteContainerAnimate(containers[i])
        } else {
          secondContainerAnimate(containers[i])
        }
      }
    })

// Line 143 (ish)

// elements[k].parentElement.style.webkitTransform = 'rotateZ('+ degrees[j].degree +'deg)';
// elements[k].parentElement.style.transform = 'rotateZ('+ degrees[j].degree +'deg)';

// may be able to just call and set the hour and minute animation right after the above two lines

// TODO: need to rename the containerAnimation function to secondsAnimation
// TODO: need to create and implement the hourContainerAnimate and minuteContainerAnimate

    function hourContainerAnimate(container) {
      var container = container
      $interval(function() {
        requestAnimationFrame(animate)
      }, (60 * 60 + 1)) // 60 * 60 * 1000

      function animate(){
        // container.angle += (6/100)
        container.angle += 6 // hour angle
        container.style.webkitTransform = 'rotateZ('+ container.angle +'deg)'
        container.style.transform = 'rotateZ('+ container.angle +'deg)'
        // container.style.transition = 'all 1s ease'
      }
    }

    function minuteContainerAnimate(container) {
      var container = container
      $interval(function() {
        requestAnimationFrame(animate)
      }, (60 * 10)) // 60 * 1000

      function animate(){
        container.angle += 6
        container.style.webkitTransform = 'rotateZ('+ container.angle +'deg)'
        container.style.transform = 'rotateZ('+ container.angle +'deg)'
        // container.style.transition = 'all 1s ease'
      }
    }

    // this function runs on a 1 second callback
    function secondContainerAnimate(container) {
      var container = container
      $interval(function() {
        requestAnimationFrame(animate)
      }, 100, 10)

      function animate(){
        // container.angle += (6/100) // seconds animation
        container.angle += 6
        container.style.webkitTransform = 'rotateZ('+ container.angle +'deg)'
        container.style.transform = 'rotateZ('+ container.angle +'deg)'
        container.style.transition = 'all 1s ease'
      }
    }
  })
