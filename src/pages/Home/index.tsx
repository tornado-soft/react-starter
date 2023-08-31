export default function Home(): React.JSX.Element {
  const count = useCounterStore((state) => state.count)

  return <>{count}</>
}
