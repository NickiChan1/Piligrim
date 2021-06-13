import {$public,$authPublic} from "./index";

export const registration = async (email, password) => {
    const response = await $authPublic.post('app/user/registration', {email, password})
    return response;
}

export const getrule = async () => {
    const response = await $public.get('app/faq/getoneFaq/1');
    return response;
}

export const add_news  = async (news_name, news_content, news_image, news_data) => {
    let data = new FormData();
    data.append('news_name', news_name);
    data.append('news_content', news_content);
    data.append('news_image', news_image);
    data.append('news_data', news_data);
    const require = await $public.post('app/news/add', data);
    return require;
}