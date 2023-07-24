import { add as rAdd } from 'ramda';
import type { FunctionalComponent } from 'vue';
type AbouteViewProps = {
	message: string;
};

type AbouteViewEvents = {
	sendMessage(message: string): void;
};

const AbouteView: FunctionalComponent<AbouteViewProps, AbouteViewEvents> = (props, ctx) => {
	const radioVal = ref('New York');
	const switchVal = ref(true);
	const sliderVal = ref(50);

	function onClick() {
		console.log(rAdd(1)(2), 9);
		// aa();
		ElNotification({
			type: 'success',
			title: '已成功发送邮件',
			message: '验证码区分大小写，有效期5分钟',
			duration: 3000,
		});
		ctx.emit('sendMessage', props.message);
	}
	return (
		<div class="container">
			<h1>Custom theme example (on demand)</h1>
			{props.message}
			<el-row>
				<el-button onClick={onClick}>Default</el-button>
				<el-button type="primary" onClick={onClick}>
					Primary
				</el-button>
				<el-button type="success" onClick={onClick}>
					Success
				</el-button>
				<el-button type="info" onClick={onClick}>
					Info
				</el-button>
				<el-button type="warning" onClick={onClick}>
					Warning
				</el-button>
				<el-button type="danger" onClick={onClick}>
					Danger
				</el-button>
			</el-row>
			<el-radio-group v-model={radioVal.value}>
				<el-radio-button label="New York" />
				<el-radio-button label="Washington" />
				<el-radio-button label="Los Angeles" />
				<el-radio-button label="Chicago" />
			</el-radio-group>
			<div>
				<el-switch v-model={switchVal.value} />
				&nbsp;
				<el-switch v-model={switchVal.value} active-color="#13ce66" inactive-color="#ff4949" />
			</div>
			<div>
				<el-select>
					<el-option value="test">test</el-option>
				</el-select>
				&nbsp;
				<el-date-picker />
			</div>
			<el-slider v-model={sliderVal.value} />
			<p>
				It is a example built by vite.&nbsp; More info see
				<a href="https://github.com/element-plus/unplugin-element-plus" target="_blank">
					unplugin-element-plus
				</a>
				.
			</p>
		</div>
	);
};
AbouteView.props = {
	message: {
		type: String,
		default: '',
	},
};
AbouteView.emits = {
	sendMessage: (value: unknown) => typeof value === 'string',
};
export default AbouteView;
