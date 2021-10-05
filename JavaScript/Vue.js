Vue.createApp({
data() {
    return {
        word: null,
        words: [],
        message: null
    }
},
methods: {
    addWord(word) {
        this.words = [word, word.toUpperCase(), word.toLowerCase()];
    }
},


}).mount("#app")