'use client';

import { motion } from 'framer-motion';
import { TitleSection } from './TitleSection';
import { contactInfo } from '@/data/data';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id='contact' className='section-padding bg-muted/30'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='section-header-wrapper'
          >
            <TitleSection title='Contáctanos' />
            <p className='section-description max-w-md'>
              ¿Tienes preguntas? Nos encantaría saber de ti. Envíanos
              un mensaje y te responderemos lo antes posible.
            </p>

            <div className='mt-10 space-y-6'>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-center gap-4'
                >
                  <div className='size-12 rounded-xl icon-container-base'>
                    <item.icon className='size-5' />
                  </div>
                  <span className='text-foreground font-medium'>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className='bg-card-rounded-3xl p-8 border border-border shadow-lg'>
              <div className='space-y-6'>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Nombre
                  </label>
                  <Input
                    type='text'
                    placeholder='Tu nombre'
                    className='h-12 rounded-xl bg-muted/50 border-border'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Correo Electronico
                  </label>
                  <Input
                    type='email'
                    placeholder='Tu correo'
                    className='h-12 rounded-xl bg-muted/50 border-border'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Mensaje
                  </label>
                  <Textarea
                    placeholder='Tu mensaje'
                    rows={5}
                    className='rounded-xl bg-muted/50 border-border resize-none'
                  />
                </div>

                <Button
                  variant={'default'}
                  size={'lg'}
                  className='w-full gap-2'
                >
                  <Send className='size-4' />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
