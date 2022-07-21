<script>
	import { FeedbackStore } from './../stores.js';

    $: count = $FeedbackStore.length
	$: average = $FeedbackStore.reduce((a, {rating}) =>a + rating, 0) / $FeedbackStore.length 
</script>

<div class="feedback-stats">
    <h4>{count} reviews</h4>
    <h4>Ratings Average: {Math.round(average)}</h4>
</div>

<style>
    .feedback-stats {
       display: flex;
       justify-content: space-between;
       align-items: center; 
    }
</style>