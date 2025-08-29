type PlatformType = 'ios' | 'android' | 'web';

const getPlatform = (): PlatformType => {
	const userAgent = navigator.userAgent.toLowerCase();

	if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
	if (/android/.test(userAgent)) return 'android';

	return 'web';
};

export default getPlatform;
