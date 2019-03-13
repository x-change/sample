const fetchUserList = async () => {
    const response = await fetch('/api/users', {
        method: 'GET',
    });

    return response.json();
};

export {
    fetchUserList,
}