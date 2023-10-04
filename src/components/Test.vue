<template>
    <div class="">
        <Card>
            <template #image>
                Image
            </template>
            <template #title>
                <p>Title</p>
            </template>
            <template #footer>
                <button>Footer</button>
            </template>
        </Card>
    </div>
</template>
<script >
// import Timer from './Timer.vue';
// import Control from './control.vue';

// import BaseButton from './baseButton.vue';
// import Form from './Form.vue';
// import List from './List.vue';
import Card from './Card.vue'
export default {
    name: "testTemp",
    components : {
        Card
    }

}

</script>
<style>

</style>