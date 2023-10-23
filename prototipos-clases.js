Class LikesService {
    constructor() {
        this.likes = 0;
        this.dislikes = 0;
    }

    likes() {
        this.likes++;
    }
    
    dislikes() {
        this.dislikes++;
    }
    
    getLikes() {
        return this.likes;
    }
    
    getDislikes() {
        return this.dislikes;
    }
}

class Comment extends LikesService {
    constructor(msg) {
        super();
        this.message = msg;
    }
}

class CommentsService {
    constructor() {
        this.comments = [];
        this.commentsQty = 0;
    }

    addComment(comment) {
        this.commentsQty++;
        this.comments.push({ id: this.commentsQty, comment});
    }

    getComments() {
        return this.comments;
    }
}
