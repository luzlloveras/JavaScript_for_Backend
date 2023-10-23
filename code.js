// Creación de sistema de comentarios

// LikesService
function LikesService() {
    this.likes = 0;
    this.dislikes = 0;
}

LikesService.prototype.like = function () {
    this.likes++;
}

LikesService.prototype.dislike = function() {
    this.dislikes++;
}

LikesService.prototype.getLikes = function() {
    return this.likes;
}

LikesService.prototype.getDislikes = function() {
    return this.dislikes;
}

// Comment
function Comment(msg) {
    LikesService.call(this)
    this.message = msg
}

Comment.prototype = Object.create(LikesService.prototype);
Comment.prototype.constructor = Comment;

// CommentService
function CommentsService() {
    this.comments = [];
    this.commentsQty = 0;
}

CommentsService.prototype.addComment = function (comment) {
    this.commentsQty++;
    this.comments.push({ id: this.commentsQty, comment });
}

CommentsService.prototype.getComments = function () {
    return this.comments;
}

console.log('\n')

console.log("Creamos una nueva instancia de nuestro servicio de comentarios")
const thread = new CommentsService();
console.log(thread)
console.log('\n')

