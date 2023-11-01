<template>
    <div class="wrap">
        <div class="inside">
            <div id="app">Hasil: {{ hasil }}</div>
            <input v-model="angka1" type="number">
            <input v-model="angka2" type="number">
            <br>
            <button v-on:click="hasil = angka1 + angka2">+</button>
            <button @click="hasil = angka1 - angka2">-</button>
            <button @click="hasil = angka1 * angka2">*</button>
            <button @click="hasil = angka1 / angka2">/</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            angka1: '',
            angka2: '',
            hasil: '',
        }
    }
}
</script>