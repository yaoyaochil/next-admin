'use server'


export async function routerNavigate(url:string) {
    return await import('next/router').then(({default: router}) => {
        router.push(url)
    })
}