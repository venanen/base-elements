<template>
  <div class="container-fluid">
    <button @click="testRun">1</button>
    <button @click="testRun">2</button>
  </div>
</template>

<script>
export default {
  // TODO убрать комментарий
  // middleware: 'auth',
  data() {
    return {
      test: 0,
    }
  },
  mounted() {
    // this.testRun()
  },
  methods: {
    testRun() {
      const ref = this.$fire.firestore.collection('base-elements')

      ref.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
        })
      })
    },
    add() {
      this.$fire.firestore.collection('base').add({
        count: 124,
        group: 0,
        name: 'ddf',
        quanity: 10,
        reference: '',
      })
    },
  },
}
</script>

<style></style>
