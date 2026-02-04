<template>
    <footer class="mt-auto py-4">
        <div class="container text-center">
            <div class="glass-effect d-inline-block px-4 py-2 rounded-pill">
                <p class="mb-0 small text-secondary fw-bold">
                    &copy; 2026 FPoly Blog. Designed with <i class="bi bi-heart-fill text-danger animate-beat"></i> by You.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.animate-beat { animation: beat 1s infinite alternate; display: inline-block; }
@keyframes beat { to { transform: scale(1.2); } }
</style>