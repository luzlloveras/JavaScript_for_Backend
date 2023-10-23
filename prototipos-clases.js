Class LikesService {
    constructor() {
        this.likes = 0;
        this.dislikes = 0;
    }
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
