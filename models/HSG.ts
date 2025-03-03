export default class HSG {
    id: string;
    name: string;
    description: string = "";
    mail: string = "";
    website: string = "";
    instagramHandle: string = "";
    facebookHandle: string = "";
    twitterHandle: string = "";
    linkedinHandle: string = "";
    youtubeHandle: string = "";
    tiktokHandle: string = "";
    discordLink: string = "";
    telegramLink: string = "";
    meeting: string = "";
    address: string = "";

    constructor(id: string, name: string,
        description: string = "", mail: string = "", website: string = "",
        instagramHandle: string = "", facebookHandle: string = "",
        twitterHandle: string = "", linkedinHandle: string = "",
        youtubeHandle: string = "", tiktokHandle: string = "",
        discordLink: string = "", telegramLink: string = "",
        meeting: string = "", address: string = "") {

            if (id === "")
                throw new Error("id must not be empty");

            if (name === "")
                throw new Error("name must not be empty");

            this.id = id;
            this.name = name;
    }

/*     static fromCollection({ id, data }: { id: string, data: { name: string, description: string, mail: string, website: string, instagramHandle: string, facebookHandle: string, twitterHandle: string, linkedinHandle: string,  youtubeHandle: string, tiktokHandle: string, discordLink: string, telegramLink: string, meeting: string, address: string } }): HSG {
        const hsg = new HSG(id, data.name);
        hsg.description = data.description;
        hsg.mail = data.mail;
        hsg.website = data.website;

        hsg.instagramHandle = data.instagramHandle;
        hsg.facebookHandle = data.facebookHandle;
        hsg.twitterHandle = data.twitterHandle;
        hsg.linkedinHandle = data.linkedinHandle;
        hsg.youtubeHandle = data.youtubeHandle;
        hsg.tiktokHandle = data.tiktokHandle;
        hsg.discordLink = data.discordLink;
        hsg.telegramLink = data.telegramLink;

        hsg.meeting = data.meeting;
        hsg.address = data.address;

        return hsg;
    } */
}