<template>
    <button class="btnPrincipal">
        {{ textoBotao }}
    </button>
</template>

<script>
export default {
    props: {
        textoBotao: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.btnPrincipal{
    color: var(--creme, #fffaf3);
    background: var(--coral, #f0633c);
    font-weight: 700;
    padding: 10px 4rem;
    border-radius: 50px;
    cursor: pointer;
}
</style>