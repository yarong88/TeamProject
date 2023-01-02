<template>
  <div class="chat">
    <h1>{{ ttl }}</h1>
    <p>Vue.js 로 작성되고 대화명 아이디가 표시되는 채팅</p>

    <div class="chat_room">
      <ul></ul>
      <input type="text" v-model="txt" />
      <button @click="sendMsg()"></button>
    </div>
  </div>
</template>

<script>
// user list 를 import 하는방법
// import component

export default {
  name: "Chat",

  // props:
  data() {
    // 컴포넌트로 전달받은값
    // data() // vue instance 가 사용할 정보
    // setup()이 있으면 data() 없어도됨

    return {
      ttl: "Chat Room",
      chatters: [],
      //   messages: [], // 메시지 저장 기능을 위한 예약
      txt: String,
      id: String,
    };
  },

  methods: {
    sendMsg() {
      //  const txt = chatting.value; // 필요없음 v-model 이용
      //   const msg = id + txt; // id txt는 templete 에서 조작 가능

      // e.preventDefault()

      if (txt) {
        socket.emit("chat_message", { id: txt }); // 동기적
        txt = "";
      }
    },

    // v-for 사용하여 목록 표시
    // <TodoItem
    //   v-for="item in groceryList"
    //   :todo="item"
    //   :key="item.id"
    // ></TodoItem>
  },

  //   setup(props) {
  //     const chatid = {

  //     }
  //   }
}; // export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
