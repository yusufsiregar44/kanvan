import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

var config = {
  //moved to env
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backlogTiles: null,
    priorityTiles: null,
    inProgressTiles: null,
    doneTiles: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    assignBacklogTiles(state, payload) {
      return state.backlogTiles = payload;
    },
    assignPiorityTiles(state, payload) {
      return state.priorityTiles = payload;
    },
    assignInProgressTiles(state, payload) {
      return state.inProgressTiles = payload;
    },
    assignDoneTiles(state, payload) {
      return state.doneTiles = payload;
    },
  },
  actions: {
    firestoreRealTime({ commit }) {
      firebase.firestore().collection('kanvan').where('kanvanConstant', "==", 1)
        .onSnapshot(function (querySnapshot) {
          let tilesArr = [];
          querySnapshot.forEach(function (doc) {
            let content = doc.data().content;
            let kanvanConstant = doc.data().kanvanConstant;
            let id = doc.id
            let processedData = {
              id: id,
              content: content,
              kanvanConstant: kanvanConstant,
            }
            tilesArr.push(processedData);
          })
          commit('assignBacklogTiles', tilesArr);
        })

      firebase.firestore().collection('kanvan').where('kanvanConstant', "==", 2)
        .onSnapshot(function (querySnapshot) {
          let tilesArr = [];
          querySnapshot.forEach(function (doc) {
            let content = doc.data().content;
            let kanvanConstant = doc.data().kanvanConstant;
            let id = doc.id;
            let processedData = {
              id: id,
              content: content,
              kanvanConstant: kanvanConstant,
            }
            tilesArr.push(processedData);
          })
          commit('assignPiorityTiles', tilesArr);
        })

      firebase.firestore().collection('kanvan').where('kanvanConstant', "==", 3)
        .onSnapshot(function (querySnapshot) {
          let tilesArr = [];
          querySnapshot.forEach(function (doc) {
            let content = doc.data().content;
            let kanvanConstant = doc.data().kanvanConstant;
            let id = doc.id;
            let processedData = {
              id: id,
              content: content,
              kanvanConstant: kanvanConstant,
            }
            tilesArr.push(processedData);
          })
          commit('assignInProgressTiles', tilesArr);
        })

      firebase.firestore().collection('kanvan').where('kanvanConstant', "==", 4)
        .onSnapshot(function (querySnapshot) {
          let tilesArr = [];
          querySnapshot.forEach(function (doc) {
            let content = doc.data().content;
            let kanvanConstant = doc.data().kanvanConstant;
            let id = doc.id;
            let processedData = {
              id: id,
              content: content,
              kanvanConstant: kanvanConstant,
            }
            tilesArr.push(processedData);
          })
          commit('assignDoneTiles', tilesArr);
        })
    },
    addNewTile(context, payload) {
      console.log(payload);
       firebase.firestore().collection('kanvan').add({
         content: payload,
         kanvanConstant: 1,
       })
       // eslint-disable-next-line
       .then((response) => {
         console.log(response);
       })
       // eslint-disable-next-line
       .catch((err) => {
         console.log(err);
         window.alert('Oops, something went wrong :(\nPlease try again)')
       })
    },
    removeTile(context, payload) {
      console.log(payload);
       firebase.firestore().collection('kanvan').doc(payload).delete()
       // eslint-disable-next-line
       .then((response) => {
         console.log(response);
       })
       // eslint-disable-next-line
       .catch((err) => {
         console.log(err);
         window.alert('Oops, something went wrong :(\nPlease try again)')
       })
    },
    moveTileRight(context, payload) {
      console.log('kanan', payload.content);
      firebase.firestore().collection('kanvan').doc(payload.id).set({
         content: payload.content,
         kanvanConstant: payload.newKanvanConstant,
       })
       // eslint-disable-next-line
       .then((response) => {
         console.log(response);
       })
       // eslint-disable-next-line
       .catch((err) => {
         console.log(err);
         window.alert('Oops, something went wrong :(\nPlease try again)')
       })
    },
    moveTileLeft(context, payload) {
      console.log('kiri', payload.content);
      firebase.firestore().collection('kanvan').doc(payload.id).set({
         content: payload.content,
         kanvanConstant: payload.newKanvanConstant,
       })
       // eslint-disable-next-line
       .then((response) => {
         console.log(response);
       })
       // eslint-disable-next-line
       .catch((err) => {
         console.log(err);
         window.alert('Oops, something went wrong :(\nPlease try again)')
       })
    },
  },
});
