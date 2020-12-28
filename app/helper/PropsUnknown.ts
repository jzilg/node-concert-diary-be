type PropsUnknown<T> = {
    [P in keyof T]: unknown;
}

export default PropsUnknown
