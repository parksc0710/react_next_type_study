import {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';

// 페이지 컴포넌트의 props 타입
type SSGProps = {
    message: string;
};

const Ssg: NextPage<SSGProps> = (props)  => {

    const {message} = props;

    return (
        <div>
            <Head>
                <title>Static 페이지 생성 테스트</title>
            </Head>
            <main>
                <p>
                    빌드시 생성 된 정적 페이지 {message}
                </p>
            </main>
        </div>
    )
}

// getStaticProps 는 빌드시 실행
export const getStaticProps: GetStaticProps<SSGProps> = async () => {

    const timeStamp:string = new Date().toLocaleTimeString();
    const message:string = `${timeStamp}에 getStaticProps 실행 됨`;

    return {
        props: {
            message
        }
    };
}

export default Ssg;