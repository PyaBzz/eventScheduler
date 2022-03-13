import { container } from 'tsyringe';
import { The } from './refs';
import { EntryService } from './services/entryService';
import { EntryServiceConcept } from './services/entryServiceConcept';

const Container = container;

Container.register<EntryServiceConcept>(The.EntryService, EntryService);

export { Container }