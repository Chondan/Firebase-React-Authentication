function getFullPath(path) {
	return `${'' || process.env.REACT_APP_DEFAULT_PATH}${path}`;
}

export { getFullPath };