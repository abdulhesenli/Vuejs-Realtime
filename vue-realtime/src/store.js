import { createStore } from "vuex";
import axios from 'axios'
import router from './router'


const store = createStore({
    state: {
        bosArray: [],
        updateData: ''
    },


    getters: {
        gonderData(state) {
            return state.bosArray;
        },

        gonderUpdate(state) {
            return state.updateData;
        }
    },

    mutations: {
        updateMehsul(state, palLoad) {
            state.bosArray.push(palLoad);
        },
        UpddateGetGelen(state, payLoad) {
            state.updateData = payLoad;
        }
    },


    actions: {

        dataGetir({ commit }) {
            axios.get('https://test-6022c-default-rtdb.firebaseio.com/products.json')
                .then(response => {
                    let data = response.data;

                    for (let key in data) {
                        data[key].key = key;
                        commit('updateMehsul', data[key])
                    }
                })
        },

        sendData({ commit }, gelenData) {
            axios.post('https://test-6022c-default-rtdb.firebaseio.com/products.json',
                gelenData
            ).then(response => {
                gelenData.key = response.data.name;
                commit('updateMehsul', gelenData);
                router.replace('/about')
            })
        },


        silData({ state, commit }, silinen) {
            axios.delete(`https://test-6022c-default-rtdb.firebaseio.com/products/${silinen}.json`)
                .then(response => {
                    let index = state.bosArray.find((item) => {
                        return item.key == silinen
                    })
                    let ind = state.bosArray.indexOf(index);
                    state.bosArray.splice(ind, 1);
                })
        },


        updateGet({ state, commit }, updt) {
            axios.get(`https://test-6022c-default-rtdb.firebaseio.com/products/${updt}.json`)
                .then(response => {
                    response.data.key = updt;
                    commit('UpddateGetGelen', response.data);
                })
        },


        updatePatch({ state, commit }, gelenPatch) {
            axios.patch(`https://test-6022c-default-rtdb.firebaseio.com/products/${gelenPatch.key}.json`,
                gelenPatch)
                .then(response => {
                    let x = state.bosArray.find((item) => {
                        return item.key == gelenPatch.key;
                    });

                    let y = state.bosArray.indexOf(x);
                    state.bosArray.splice(y, 1,response.data);
                });
        }


    }
})


export default store