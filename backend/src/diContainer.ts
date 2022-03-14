import { The } from './refs';
import { container as Container } from 'tsyringe';
import { EntryServiceConcept } from './services/entryServiceConcept';
import { EntryService } from './services/entryService';
import { EntryRepoConcept } from './repos/entryRepoConcept';
import { EntryRepoMock } from './repos/entryRepoMock'

Container.register<EntryServiceConcept>(The.EntryService, EntryService);
Container.register<EntryRepoConcept>(The.EntryRepo, EntryRepoMock);

export { Container }