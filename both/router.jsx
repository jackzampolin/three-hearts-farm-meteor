FlowRouter.route("/", {
  action: function(params) {
    ReactLayout.render(Main,{
      content: <TestApp />
    })
  }
})
