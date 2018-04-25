angular.module('primeiraApp').factory('tabs', [ function() {

   function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false
   }) {
     console.log('tabList> '+tabList+" \ntabCreate> "+tabCreate+" \ntabUpdate> "+tabUpdate+" \ntabDelete> "+tabDelete)
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
   }

   return { show }
}])
