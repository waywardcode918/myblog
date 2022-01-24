<!--  -->
<template>
	<div class="intr-page">
		<img :src="require('@/assets/showimg.jpg')" class="imgs" />
		<h2 class="welcome-text">欢迎来到"任性的代码"的博客</h2>
		<p class="my-intr">一个喜爱记录自己学习的过程的前端程序猿的博客</p>
		<el-button
			type="success"
			style="margin-bottom: 20px"
			class="goto-button"
			@click="goShow"
			>前往查看<i class="el-icon-arrow-right" style="margin-left:10px"></i
		></el-button>
		<el-row>
			<el-col
				:span="7"
				v-for="(item, index) in cartList"
				:key="index"
				:offset="index > 0 ? 1 : 0"
			>
				<el-card>
					<h2 class="cart-title">{{ item.title }}</h2>
					<p class="cart-content">{{ item.content }}</p>
				</el-card>
			</el-col>
		</el-row>
		<footer class="footer">
			<p class="footer-code">NIU BCLASS | Copyright © 2020-present waywordcode 沪ICP备11526549号-1</p>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cartList: [
				{
					title: "关于我",
					content:
						"我的笔名叫任性的代码,英文笔名waywordcode(直译：任性的代码),是一名前端工程师,喜欢记录自己学习的过程并分享,还在努力成长中，如果我的笔记有任何错误，希望指正！",
				},
				{
					title: "关于站点",
					content:
						"该博客采用vue+elementUI作为技术栈，通过读取项目中的MD文件实现导航配置化，读取方式采用axios，MD文件展示采用了v-md-editor,纯前端博客，使用vercel实现自动化部署。",
				},
				{
					title: "关于前端",
					content:
						"自从各种插件和ui库的出现，使得前端越来越与后端分开，逐步走向工程化，特别是随着react、vue等框架的出现和完善，使得前后端更加分离，前端做前端的事，后端做后端的事！",
				},
			],
		};
	},
	methods:{
		goShow(){
			this.$router.push({
				path: "/Home/Article",
						query: {
							type: window.typeCode,
						},
			})
		}
	}

};
</script>
<style lang='less' scoped>
.intr-page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.imgs {
		height: 300px;
		width: 532px;
		background-size: 100% 100%;
		margin-top: 50px;
	}
	.welcome-text {
		margin-top: 50px;
		font-size: 30px;
		font-weight: 800;
	}
	.my-intr {
		margin: 20px 0;
	}
	.cart-title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.cart-content {
		font-size: 14px;
	}
	.goto-button.el-button {
		height: 60px;
		width: 150px;
		font-size: 18px;
	}
	.footer{
		margin-top: 60px;
		margin-bottom: 60px;
		.footer-code{
			font-size: 14px;
		}
	}
}
</style>