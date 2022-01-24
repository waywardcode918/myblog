<!--  -->
<template>
	<div class="article-page">
		<div class="contents">
			<el-collapse
				v-model="activeNames"
				@change="getContents"
				class="content-con"
			>
				<el-collapse-item title="目录" name="1">
					<div
						v-for="(anchor, index) in titles"
						:style="{
							padding: `5px 0 5px ${anchor.indent * 10}px`,
						}"
						@click.stop="handleAnchorClick(anchor)"
						:key="index"
					>
						<a style="cursor: pointer">{{ anchor.title }}</a>
					</div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div class="details">
			<v-md-preview :text="str" ref="preview" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			titles: [],
			str: "",
			activeNames: [],
			url: "",
		};
	},


	mounted() {
		const type = this.$route.query.type;
		this.url = `./md/${type}.md`;
		this.$axios.get(this.url).then((res) => {
			this.str = res.data;
		});
	},

	methods: {
		handleAnchorClick(anchor) {
			const { preview } = this.$refs;
			const { lineIndex } = anchor;
			const heading = preview.$el.querySelector(
				`[data-v-md-line="${lineIndex}"]`
			);
			if (heading) {
				preview.scrollToTarget({
					target: heading,
					scrollContainer: window,
					top: 60,
				});
			}
		},
		getContents() {
			console.log(this.activeNames);
			const anchors =
				this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
			const titles = Array.from(anchors).filter(
				(title) => !!title.innerText.trim()
			);
			if (!titles.length) {
				this.titles = [];
				return;
			}
			const hTags = Array.from(
				new Set(titles.map((title) => title.tagName))
			).sort();
			this.titles = titles.map((el) => ({
				title: el.innerText,
				lineIndex: el.getAttribute("data-v-md-line"),
				indent: hTags.indexOf(el.tagName),
			}));
			console.log(this.titles);
		},
	},
	watch: {
		$route: {
			handler: function (val, oldVal) {
				const type = this.$route.query.type;
				this.url = `./md/${type}.md`;
				this.$axios.get(this.url).then((res) => {
					this.str = res.data;
				});
				this.activeNames=[]
			},
			// 深度观察监听
			deep: true,
		},
	},
};
</script>
<style lang='less' scoped>
.article-page {
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-top: 20px;
	.contents {
		width: 25%;
	height: 80vh;
	position: sticky;
	top: 60px;
	overflow: auto;
	}
	.details {
		width: 75%;
	}
}
</style>