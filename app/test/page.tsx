'use client';
import { useEffect, useState } from 'react';

export default function TestPage({ props }: { prop }) {
    const test = useNavbar()
    const [test, setTest] = useState(1)
    setTest(2)
  useEffect(() => {}, []);
  return <></>;
}

export function getServerSideProps() {
  const result = fetch('xxx');
  return {
    props: result,
  };
}

export function getStaticProps() {
  const result = fetch('xxx');
  return {
    props: result,
  };
}