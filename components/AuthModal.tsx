"use client";

import React, { useEffect } from 'react'
import Modal from './Modal';
import { 
  useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa, supabase } from '@supabase/auth-ui-shared';
import useaAuthModal from '@/hooks/useAuthModal';

const AuthModal = () => {
  const AuthModal = useSupabaseClient();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session} = useSessionContext();
  const { onClose, isOpen } = useaAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [ session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal
    title='Welcome back'
    description='Login to your account'
    isOpen={isOpen}
    onChange={onChange}
    >
      <Auth
      theme='dark'
      magicLink
      providers={["github"]}
      supabaseClient={supabaseClient}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors : {
              brand: '#404040',
              brandAccent: '#22c55e'
            }
          }
        }
      }}
      />
    </Modal>
  )
}

export default AuthModal;
