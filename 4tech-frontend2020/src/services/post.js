import { axios4tech } from './config';

/*export const getPosts = async (page = 0) => {
    return await axios4tech.get(`user-activity/${page}`);
};*/

export const uploadImage = (image, comment) => {
    const data = new FormData();
    data.append('image', image);
    data.append('description', comment);
    data.append('userId', localStorage.getItem('userId'));

    return axios4tech.post('user-activity/upload', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getPosts = (page = 0) => {
    return axios4tech.get(`user-activity/${page}`);
}

export const sendComment = (userId, mediaId, comment) => {
    return axios4tech.put('user-activity/comment-in-activity', {
        userId,
        mediaId,
        comment
    });
}

export const sendLike = (userId, mediaId) => {
    return axios4tech.put('user-activity/like-or-dislike', {
        userId,
        mediaId
    });
}