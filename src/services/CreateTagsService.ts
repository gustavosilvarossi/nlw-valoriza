import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepositores";

export class CreateTagsService {

    async execute(name: string) {
        const tagsRepository = getCustomRepository(TagsRepository);

        if (!name) throw new Error('Incorrect name!');

        const tagsAlreadyExists = await tagsRepository.findOne({
            name
        });

        if (tagsAlreadyExists) throw new Error('Tags already exists');

        const tag = tagsRepository.create({name});

        await tagsRepository.save(tag);

        return tag;

    }

}