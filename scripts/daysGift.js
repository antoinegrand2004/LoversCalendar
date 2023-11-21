let DaysGifts = [
    {
        type: 'text',
        content: "<h1>Bienvenue sur ton calendrier mon Amour</h1><p>Coucou mon chat, j'espère que cette petite surprise te plaira !</p><p>(T'auras bien essayé de la trouver, à l'heure où j'écris ça je sais pas si tu l'as deviné)</p><p>Au programme de ce calendrier, des photos, des petits indices sur tes cadeux de Noël, des cadeaux et pleins d'autres...</p><p>Comme tu peux l'imaginer tu reviens tout les jours et une nouvelle surprise t'attendra.</p><h2>A demain ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>Comme promis, les prochains jours vont être les photos à thème</p><img src='./ressources/img/funny.jpeg'</img><p>La première est celle où je te (nous) trouve le plus drôle.</p>"
    },
    {
        type: 'text',
        content: "<img src='./ressources/img/beautifull.jpeg'><p>La photo où je te trouve la plus belle</p><h2>❤</h2>"
    },
    {
        type: 'text',
        content: "<img src='./ressources/img/cute.jpeg'><p>La photo où je te trouve la plus cute</p><h2>❤</h2>"
    },
    {
        type: 'text',
        content: "<p>Aujourd'hui c'est la photo hot et tu te doutes que j'allais pas la mettre ici...</p><p>Envoie moi 'jour 5' par sms et je t'enverrai la photo que tu attends !<h2>❤</h2>"
    },
    {
        type: 'text',
        content: "<img src='./ressources/img/favorite.jpeg'><p>Ma photo préférée de tout les temps</p><h2>❤</h2>"
    },
    {
        type: 'question',
        questionContent: "<h1>Case Question</h1><p>Coucou je te présente la case question, t'en trouveras plusieurs dans ce calendrier.</p><p>Le principe est simple, t'as une question et tu y réponds !</p><p>La toute première est simple : quel est le symbole de l'amour ?</p>",
        choices: ['coeur', 'heart'],
        content: "<p>Bravo à toi mon amour, je te l'accorde c'était simple ! Mais bravo pour ça !</p><p>En récompense je t'offre ce petit pendentif avec le symbole de l'amour</p><img src='./ressources/img/pendentif.jpeg'><h2>❤</h2>"
    },
    {
        type: 'text',
        content: "<p>Jour à trouver !</p>"
    },
    {
        type: 'text',
        content: "<p>Petit jour assez simple, prends ça en photo et tu le sors quand tu veux !</p><img src='./ressources/img/dej.jpg'><h2>Bon pour un ptit dej au lit ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>Jour à trouver !</p>"
    },
    {
        type: 'question',
        questionContent: "<p>Quel est un plat que j'ai kiffé faire avec toi ?</p><p>Indice : tu as fait un BeReal où je te trouve juste sublime où on a cuisiné ce plat.</p>",
        choices: ['sushi', 'sushis'],
        content: "<p>Bravo à toi mon ange !</p><p>Le cadeau d'aujourd'hui tu connais la chanson, prends en photo et sors moi ça quand tu veux.</p><img src='./ressources/img/beReal.png'><h2>Bon pour qu'on se cuisine des sushis en amoureux ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>jour à trouver</p>"
    },
    {
        type: 'question',
        questionContent: "<p>Quel est une activité que tu préfères avec moi ?</p><p>Indice : ça te fait toujours du bien !</p>",
        choices: ['massage', 'massages'],
        content: "<p>Bravo à toi mon chat !</p><p>Le cadeau d'aujourd'hui tu le prends en photo et tu me sors cette photo dès que tu le sens.</p><img src='./ressources/img/massage.jpg'><h2>Bon pour que je pose mes mains sur ton corps pour un massage ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>jour à trouver</p>"
    },
    {
        type: 'text',
        content: "<p>Encore un petit jour simple où je te fais gagner des bons moment avec moi !</p><p>Cette fois on change un peu tu peux le faire un peu avant qu'on se retrouve !</p><img src='./ressources/img/cookies.jpg'><h2>Bon pour nous faire une petite séance de cuisine cookies à distance ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>livre de cuisine</p>"
    },
    {
        type: 'text',
        content: "<p>poème</p>"
    },
    {
        type: 'text',
        content: "<p>indice parfum</p>"
    },
    {
        type: 'text',
        content: "<p>bon pour un ciné</p>"
    },
    {
        type: 'question',
        questionContent: "<h1>Sûrement ton jour préféré !</h1><p>Dans quel endroit est-ce que je trouve que tu es juste magnifique ?</p><h2>(Encore plus que d'habitude !)</h2><p>J'en ai même eu les larmes aux yeux une fois...</p>",
        choices: ["patinoire", "patin", "glace"],
        content: "<p>J'espère que tu as fait un album photo pour stocker les bons parce qu'il commence à y en avoir beaucoup...</p><p>Maintenant, on aura plus d'excuses pour y aller !</p><img src='./ressources/img/patinoire.jpg'><h2>Bon pour qu'on aille faire du patin ! ❤</h2>"
    },
    {
        type: 'question',
        questionContent: "<h2>Question très facile pour aujourd'hui !</h2><p>Est-ce que tu saurais me dire où est-ce qu'on a pris cette photo ?</p><img src='./ressources/img/ballon.jpeg'>",
        choices: ["ballon", "alsace"],
        content: "<h1>Bravo à toi !</h1><p>Ce que je te propose c'est de prendre en photo le bon suivant !</p><p>(à n'utiliser que quand il y a de la neige bien sûr...)</p><img src='./ressources/img/raquette.jpg'><h2>Bon pour aller faire de la raquette au ballon d'Alsace ! ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>jour à trouver</p>"
    },
    {
        type: 'question',
        questionContent: "<p>Dans la catégorie des choses que je dois te faire depuis quelque temps déjà...</p><p>Qu'est-ce que je devais te faire il y a déjà un petit moment mais que je n'avais toujours pas fait ?</p>",
        choices: ["bracelet", "bracelets"],
        content: "<h1>Well done !!!</h1><p>Oui je sais ça faisait un petit moment que je devais te faire un bracelet comme tu m'en avais fait un !</p><p>Mais comme promis je l'ai fait !</p><h2>Maintenant viens me faire un câlin et je te le donnerai à ce moment là ! ❤</h2>"
    },
    {
        type: 'text',
        content: "<p>cadeau de Noël</p>"
    },
]