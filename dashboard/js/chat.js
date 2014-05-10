define(function() {

//  Chat.remotehost = "semrequirejs.herokuapp.com/ts";
  Chat.remotehost = "mcastillo_macbook:3000/irc";


  function Chat(options) {
    this.options = options || {};
    this.connection = options.connection || {};
  }


  Chat.prototype.connect = function(data) {
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/connect",
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify(data),
      "context": this
    })
    .done(function(connection) {
      this.connection = connection;
    });
  };


  Chat.prototype.disconnect = function(data) {
    data = data || {};
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/disconnect/" + this.connection.cid,
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify(data),
      "context": this
    });
  };


  Chat.prototype.join = function(data) {
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/join/" + this.connection.cid,
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify(data),
      "context": this
    });
  };


  Chat.prototype.leave = function(data) {
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/leave/" + this.connection.cid,
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify(data),
      "context": this
    });
  };


  Chat.prototype.send = function(message, from, to) {
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/message/" + this.connection.cid,
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify({"message": message, "from": from, "to": to}),
      "context": this
    });
  };


  Chat.prototype.get = function(id) {
    return $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/message/" + id,
      "contentType": "application/json",
      "context": this
    });
  };


  Chat.prototype.getAll = function() {
    return $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/messages",
      "contentType": "application/json",
      "context": this
    });
  };


  Chat.prototype.clear = function(id) {
    return $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/message/" + id,
      "context": this
    });
  };


  Chat.prototype.clearAll = function() {
    return $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/messages",
      "context": this
    });
  };


  return Chat;

});
