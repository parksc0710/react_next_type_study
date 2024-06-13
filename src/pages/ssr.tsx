import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";

type SSRProps = {
    message: string;
}

const Ssr: NextPage<SSRProps> = (props) => {

    const {message} = props;

    return (
        <div>
            <Head>
                <title> SSR Test</title>
            </Head>
            <main>
                <p>서버 사이드 랜더링 테스트</p>
                <p>{message}</p>
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
    const timestamp: string = new Date().toLocaleTimeString();
    const message: string = `${timestamp}에 getServerSideProps 실행 됨`;
    return {
        props: {
            message
        }
    }
}

export default Ssr;