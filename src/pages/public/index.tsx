import { octokit } from "@/utils/fetcher"
import { InferGetStaticPropsType } from "next"

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const repos = await octokit.request(
        "GET /users/{username}/repos",
        { username: "eighchang" }
    )
    return { props: { repos } }
}

export default function Page(props: PageProps) {
    if (!props.repos.data) {
        return <>error!</>
    }
    console.log(props.repos.data)
    return <div>Hello Next.js</div>
}
