<div class="card">
    <slot></slot>
</div>

<style>
    .card {
        background-color: #fff;
        color: #333;
        border-radius: 15px;
        padding: 40px 30px;
        margin: 20px 0;
        position: relative;
    }

    @media screen and (max-width: 480px) {
        .card {
            padding: 30px 15px;
        }
    }
</style>