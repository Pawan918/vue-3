<template>
    <div class="">
        <Header></Header>
        <ListItem>Start Making a Presentation</ListItem>
        <ListItem>Pay for rent</ListItem>
        <ListItem>Buy a milk</ListItem>
        <ListItem>Don't forget to pick up Mickael from School</ListItem>
        <ListItem>Buy a chocolate for Charlotte</ListItem>
    </div>
</template>
<script >
import Header from './todo/Header.vue'
import ListItem from './todo/ListItem.vue'
export default {
    name: "testTemp",
    components : {
        Header,
        ListItem
    }
}

</script>
<style></style>