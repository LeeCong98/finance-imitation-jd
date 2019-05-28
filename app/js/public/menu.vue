<template lang="html">
	<div :class="$style.menu">
		<router-link :to="{ name: item.href }" tag="div">
			<div>
				<img :src="item.img_src" :alt="item.title" />
				<span v-if="item.label" :class="$style.label">{{ item.label }}</span>
			</div>
			<h4>{{ item.title }}</h4>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {
				}
			}
		},
		methods: {

		},
	}	
</script>

<style lang="scss" module>
	.menu {
		height: inherit;
    overflow: hidden;
    display: block;
    text-align: center;
    flex: 1;
    -ms-flex: 1;
    box-flex: 1;
    -ms-box-flex: 1;
    -webkit-box-flex: 1;
    overflow: visible;
    div {
    	position: relative;
    	.label {
    		font-family: PingFangSC-Medium;
    		font-size: 22px;
    		color: #fff;
    		width: 88px;
    		height: 46px;
    		line-height: 30px;
    		text-align: center;
    		position: absolute;
    		top: -10px;
    		left: 40%;
    		padding: 10px 10px;
    		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAuCAYAAABd5YVlAAAEvklEQVRoge2aX2gcRRzHv7/d9Wqb2iZ4BmkxVS+0xSehwSpKRMS2+BwEQeyDILSIKCj46lN9EOyD+NCXxicLgm9FfFCDiFVoQPAPIm2jxjZok6axyTXJ3c74cLfX2dnfzE6au5DZ7heG3ZudmZ373Pd+M7szhI0VbfD9OMmNutG6vqw8+QjojV9d29gMYBM5AZbDeyVEu7QEINqpfU4zv1vr384X5uroeZsJpKt04JkfQA4psLsMlwU4OhQFXxwffqoS0PMk8CRJ1CAwAIGK/kvzSQKxlmcrH2t19Tp6W9w1qdSXAGKsQmBeSlyUAt+tCnH28IWpb7+JY9H+rinQcncLcjfgEnNOrx7cFnz4wp6jEegdkrJmBbL54abzJSBjXGwK8d5rf1/++NTKzeQqkAZtDS95cFmwV0/sfejebdEnJDGS6mSB4CJuHaXA+blm88X7/ro0hTUCDhzAkpKC6+/ve6a6PTpHhBFL3cKIgJFqGJ27PlR7Gi1eKg/AYlATXL0iAaCFD/Yd2rk1PAuguv5ue6XqziD8fGF37TB4sCxgDi5XMZg+Mbx/x93hGQCVLnXYN1V2hOGZ6fsf3I9bDgZz7EiHy4Ide7QS7eqvjAO4p7v99U7bd0WV8bGwEsEBcF7MDQDQ6VcefjkgHOh6Vz1UABw4PfjAUSh8LGU74gYwGtxKYV8leLtXnfVRfUH41iAohMaqfbkD2xYWCABNvlsbJUKtx/31SgTUJqt7RpEzcwiYzM60C0Aw0Bcd6XFfvdRAFB5BmxHSgJGcc85NzWu33EUHe99V/7SF6DFk573GAY2NuSFRGRIYhQiGcRsxNxUWiNDf+676JwL6kQ0LGedywVgFfKc+NLjIGG8BkD6g6Tb38b3shkgACzDzYgc0IBsaSjFaleIScoyoD2ilcx1Vl+I8+JBgHNBgKlgqrd9Wl7+Co3NNMbcUo4YUfxyav/JDXjlunoucvDteU43GR0utNQurbC/LS7CMlqX4+fGrf37qUjZvNlACViSA+vjCtTfngSZu7WZQU0qmJ7RSmiTQmFi68fqxxWsXYIaa+mx92VuqJQHUv1y8cfzZuZmvkV0ndnZuKU11Ef9ycvbfsedmZyaQXbA3hQYJAFH7hJRM500PRdaKFNM/1W+eeuLK5c+aQAP2XRkcMxkZ2mZtXlRJoBFL8d+ykNNzK/GP3y8tTrz0z+xkszVwxVqyAU4xS71ebKewnSImJdfU8kk7PoobjPQ9jTrcJrLQ9b09gOZcNV5wSSA7m5DwF6wq1XX6hiodLrf5inVuAjeBZPr1dLBSqeM7XM5U3O60xLWm3WiZNm0xV6D1t08aUK+pcAH/AHMwTHB19+pb+nKdy91ADQWxVi4BXwS4ec7V907qMZadhgFZ53Jg1WvcmpFvYFXZxhnjpldkHyRYqTFXvSH3xkd3rK+uVaW7TQWrH3W3chuijWGBu6HQzpMYXASwiVxmSdy5FSyQfkLTL6oQkzL6rKFocJOjS+LqpmRzbiIOKLeU7JvY6RN4gNxnUzsdsevtzNHm1iLCdTlybaTk4twkrwhuNckEzPS3t0JN5LJuVhSn5skFoBPURDZQrhB9hO0KaU0wdYXrqeyp1gVsLfofkw2rnUOqZEgAAAAASUVORK5CYII=) 50% no-repeat;
    		background-size: 100% 100%;
    		img {
    			width: 90px;
    			height: 90px;
    			margin-top: 30px;
    			margin-bottom: 10px;
    		}
    	} 

    }
    h4 {
    	font-size: 24px;
    	text-align: center;
    	display: block;
	    color: #666;
    }
	}
</style>