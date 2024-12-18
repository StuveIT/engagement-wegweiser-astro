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
    discordLink: string = "";
    telegramLink: string = "";
    youtubeChannel: string = "";
    tiktokHandle: string = "";

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromCollection({ id, data }: { id: string, data: { name: string, description: string, mail: string, website: string, instagramHandle: string, facebookHandle: string, twitterHandle: string, linkedinHandle: string, discordLink: string, telegramLink: string, youtubeChannel: string, tiktokHandle: string } }): HSG {
        const hsg = new HSG(id, data.name);
        hsg.description = data.description;
        hsg.mail = data.mail;
        hsg.website = data.website;
        hsg.instagramHandle = data.instagramHandle;
        hsg.facebookHandle = data.facebookHandle;
        hsg.twitterHandle = data.twitterHandle;
        hsg.linkedinHandle = data.linkedinHandle;
        hsg.discordLink = data.discordLink;
        hsg.telegramLink = data.telegramLink;
        hsg.youtubeChannel = data.youtubeChannel;
        hsg.tiktokHandle = data.tiktokHandle;

        return hsg;
    }
}