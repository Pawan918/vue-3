<template>
    <div class="listItem">
        <div class="listItem-status">
            <img src="./../../assets/Unmarked.svg"/>
        </div>
        <div class="listItem-body">
            <div class="listItems-body">
                <div class="listItem-text">
                    <span class="listItem-text--span">
                        <slot></slot>
                    </span>
                </div>
                <div class="listItem-color">
                    <img src="./../../assets/List.svg"/>
                </div>
            </div>
            <div class="listItem-footer">
                <span>
                    &nbsp;
                </span>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
@media screen and (max-width: 430px) {
    .listItem{
        display: flex;
        align-items: center;
        justify-content: flex-start;
}
.listItem-body{
    /* color: red; */
    display: flex;
    flex-direction: column;
    padding: 0px 12px 0px 16px;
    justify-content:center;
    min-height: 60px;
    gap: 15px;
    width: 100%;
}
.listItems-body{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.listItem-status{

    min-width: 25px;
}
.listItem-color{
    width: 25px;

    display: flex;
    justify-content: center;
    /* justify-content: flex-end; */
    /* flex-grow: 1; */
}
.listItem-footer{
    /* display: flex;
    align-items: flex-end; */
    width: 100%;
    height: 1px;
    opacity: 0.1px;
    background: #252A31;
}
.listItem-text{
    /* flex-grow: 6; */
}
}

</style>
