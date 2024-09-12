function criarPlaylist(){
    const nomePlaylist = document.getElementById("nomePlaylist").value;
    Playlist(nomePlaylist)
};

function Playlist(nomePlaylist){
    document.getElementById("nomedaPlaylist").textContent= "nome da playlist"+nomePlaylist;
};

